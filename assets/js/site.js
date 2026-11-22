// =============================================================
// site.js — Mobile nav, dark mode, publication filter, toggles,
//           scroll effects, copy bibtex, back-to-top
// =============================================================

(function () {
  'use strict';

  // Icons come from the inline sprite in _includes/icons.svg
  function iconHTML(name) {
    return '<svg class="icon" aria-hidden="true" focusable="false"><use href="#icon-' + name + '"></use></svg>';
  }
  function setIcon(svg, name) {
    var use = svg && svg.querySelector('use');
    if (use) use.setAttribute('href', '#icon-' + name);
  }

  // ----- Mobile Navigation -----

  var navToggler = document.querySelector('.navbar-toggler');
  var navMenu = document.getElementById('navbarNav');

  if (navToggler && navMenu) {
    navToggler.addEventListener('click', function () {
      var open = navMenu.classList.toggle('show');
      navToggler.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close the menu after a link is chosen
    navMenu.addEventListener('click', function (e) {
      if (e.target.closest('a.nav-link')) {
        navMenu.classList.remove('show');
        navToggler.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ----- Dark Mode Toggle -----

  var toggle = document.getElementById('darkModeToggle');
  var icon = document.getElementById('themeIcon');

  function updateIcon() {
    if (!icon) return;
    var theme = document.documentElement.getAttribute('data-bs-theme');
    setIcon(icon, theme === 'dark' ? 'moon' : 'sun');
  }

  if (toggle) {
    updateIcon();

    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-bs-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-bs-theme', next);
      localStorage.setItem('theme', next);
      updateIcon();
    });
  }

  // ----- Publication Expand/Collapse -----

  document.addEventListener('click', function (e) {
    var button = e.target.closest('[data-toggle-target]');
    if (!button) return;

    var targetId = button.getAttribute('data-toggle-target');
    var target = document.getElementById(targetId);
    if (!target) return;

    target.classList.toggle('show');
  });

  // ----- Publication Search/Filter -----

  var searchInput = document.getElementById('pubSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query = this.value.toLowerCase().trim();
      var entries = document.querySelectorAll('[data-pub-searchable]');

      entries.forEach(function (entry) {
        if (!query) {
          entry.style.display = '';
          return;
        }
        var text = entry.textContent.toLowerCase();
        entry.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // ----- Copy BibTeX Button -----

  document.querySelectorAll('.pub-collapse').forEach(function (collapse) {
    // Only add copy to bibtex blocks (id starts with "bib-")
    if (!collapse.id || !collapse.id.startsWith('bib-')) return;

    var pre = collapse.querySelector('pre');
    if (!pre) return;

    var wrapper = document.createElement('div');
    wrapper.className = 'copy-wrapper';
    wrapper.style.position = 'relative';

    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerHTML = iconHTML('copy');
    btn.title = 'Copy to clipboard';
    btn.setAttribute('aria-label', 'Copy BibTeX to clipboard');

    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(pre.textContent.trim()).then(function () {
        btn.innerHTML = iconHTML('check');
        btn.classList.add('copied');
        setTimeout(function () {
          btn.innerHTML = iconHTML('copy');
          btn.classList.remove('copied');
        }, 2000);
      });
    });

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    wrapper.appendChild(btn);
  });

  // ----- Balanced Card Rows -----
  // Grids marked .balanced-grid spread their cards over rows of near-equal
  // size (7 cards at 3 per row -> 3, 2, 2) and stretch each row to the full
  // width, so the last row never holds a lone small card. The maximum per
  // row comes from the CSS variable --max-cols (changed by media queries).
  // Children with .wide always take a full row of their own.

  function balanceGrid(grid) {
    var max = parseInt(getComputedStyle(grid).getPropertyValue('--max-cols'), 10) || 3;
    var gap = getComputedStyle(grid).columnGap;
    if (!gap || gap === 'normal') gap = '0px';
    var items = Array.prototype.slice.call(grid.children);
    var segment = [];

    function place(seg) {
      var n = seg.length;
      if (!n) return;
      var rows = Math.ceil(n / max);
      var base = Math.floor(n / rows);
      var extra = n % rows;          // the first `extra` rows get one more card
      var i = 0;
      for (var r = 0; r < rows; r++) {
        var k = base + (r < extra ? 1 : 0);
        for (var j = 0; j < k; j++, i++) {
          seg[i].style.flex = '0 0 calc((100% - ' + (k - 1) + ' * ' + gap + ') / ' + k + ')';
        }
      }
    }

    items.forEach(function (el) {
      if (el.classList.contains('wide')) {
        place(segment);
        segment = [];
        el.style.flex = '0 0 100%';
      } else {
        segment.push(el);
      }
    });
    place(segment);
    grid.classList.add('is-balanced');
  }

  var balancedGrids = document.querySelectorAll('.balanced-grid');
  if (balancedGrids.length) {
    var balanceAll = function () { balancedGrids.forEach(balanceGrid); };
    balanceAll();
    var balanceQueued = false;
    window.addEventListener('resize', function () {
      if (balanceQueued) return;
      balanceQueued = true;
      requestAnimationFrame(function () { balanceQueued = false; balanceAll(); });
    });
  }

  // ----- Balanced Keyword Rows -----
  // Keyword chips and tags wrap like text, which can leave one lone tag on
  // the last line. Find the narrowest width that keeps the same number of
  // lines (so every line holds a similar share of tags), group the tags into
  // those lines, then let each line stretch back to the full width.

  function tagLines(items) {
    var lines = [];
    var lastTop = null;
    items.forEach(function (el) {
      var top = Math.round(el.getBoundingClientRect().top);
      if (lastTop === null || Math.abs(top - lastTop) > 2) {
        lines.push([]);
        lastTop = top;
      }
      lines[lines.length - 1].push(el);
    });
    return lines;
  }

  function balanceTags(box) {
    // Undo a previous pass so the tags wrap freely again
    if (box._tags) {
      box._tags.forEach(function (el) { box.appendChild(el); });
      box.querySelectorAll(':scope > .tag-row').forEach(function (row) { row.remove(); });
      box.classList.remove('is-balanced');
    }
    var items = box._tags || Array.prototype.slice.call(box.children);
    box._tags = items;
    var full = box.clientWidth;
    if (!full || items.length < 2) return;

    var count = tagLines(items).length;
    if (count < 2) return;

    var lo = full / count;
    var hi = full;
    while (hi - lo > 2) {
      var mid = (lo + hi) / 2;
      box.style.width = mid + 'px';
      if (tagLines(items).length > count) lo = mid; else hi = mid;
    }
    box.style.width = hi + 'px';
    var lines = tagLines(items);
    box.style.width = '';

    lines.forEach(function (line) {
      var row = document.createElement('div');
      row.className = 'tag-row';
      line.forEach(function (el) { row.appendChild(el); });
      box.appendChild(row);
    });
    box.classList.add('is-balanced');
  }

  var tagBoxes = document.querySelectorAll('.chip-container, .topic-keywords');
  if (tagBoxes.length) {
    var balanceTagsAll = function () { tagBoxes.forEach(balanceTags); };
    balanceTagsAll();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(balanceTagsAll);
    var lastTagWidth = window.innerWidth;
    var tagsQueued = false;
    window.addEventListener('resize', function () {
      if (tagsQueued || window.innerWidth === lastTagWidth) return;
      tagsQueued = true;
      requestAnimationFrame(function () {
        tagsQueued = false;
        lastTagWidth = window.innerWidth;
        balanceTagsAll();
      });
    });
  }

  // ----- Back to Top Button -----

  var topBtn = document.createElement('button');
  topBtn.className = 'back-to-top';
  topBtn.innerHTML = iconHTML('arrow-up');
  topBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(topBtn);

  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  }, { passive: true });

  // ----- Navbar Scroll Shadow -----

  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ----- Fade-in on Scroll -----

  var fadeElements = document.querySelectorAll('.fade-in-section');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ----- Site Search -----

  var searchToggleBtn = document.getElementById('searchToggle');
  var searchOverlay = document.getElementById('searchOverlay');
  var searchInputEl = document.getElementById('searchInput');
  var searchResultsEl = document.getElementById('searchResults');
  var searchData = null;

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('open');
    setTimeout(function () { searchInputEl.focus(); }, 100);
  }

  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('open');
    searchInputEl.value = '';
    searchResultsEl.innerHTML = '';
  }

  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', openSearch);
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('open')) {
      closeSearch();
    }
    // Cmd/Ctrl + K to open search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay && searchOverlay.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
  });

  // Site may be served from a sub-path (e.g. user.github.io/repo); the layout
  // stores site.baseurl on <body> so the index can be fetched from the right place.
  var baseurl = (document.body && document.body.getAttribute('data-baseurl')) || '';

  function loadSearchData(callback) {
    if (searchData) { callback(searchData); return; }
    fetch(baseurl + '/assets/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        searchData = data;
        callback(data);
      })
      .catch(function () {
        searchResultsEl.innerHTML = '<div class="search-no-results">Could not load search index.</div>';
      });
  }

  function renderResults(query, data) {
    if (!query) {
      searchResultsEl.innerHTML = '';
      return;
    }
    var q = query.toLowerCase();
    var matches = data.filter(function (item) {
      return item.title.toLowerCase().includes(q) ||
             item.content.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      searchResultsEl.innerHTML = '<div class="search-no-results">No results for "' + query + '"</div>';
      return;
    }

    searchResultsEl.innerHTML = matches.map(function (item) {
      var snippet = item.content.substring(0, 150).trim() + '...';
      return '<a href="' + item.url + '" class="search-result-item">' +
        '<div class="search-result-title">' + item.title + '</div>' +
        '<div class="search-result-snippet">' + snippet + '</div>' +
        '</a>';
    }).join('');
  }

  if (searchInputEl) {
    var debounceTimer;
    searchInputEl.addEventListener('input', function () {
      var query = this.value.trim();
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        loadSearchData(function (data) {
          renderResults(query, data);
        });
      }, 150);
    });
  }

})();
