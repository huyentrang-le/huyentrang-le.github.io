# LE Huyen-Trang: Personal Academic Website

Source code for my personal academic webpage.

I am a PhD candidate at Cnam and ECE Engineering School (LyRIDS / CEDRIC laboratories), working on certified dynamic reconfiguration of Time-Sensitive Networks (TSN) with network calculus. Before that, I worked on blockchain, zero-knowledge proofs and privacy-preserving systems for healthcare and genomic data at the [IBISC Laboratory](https://www.ibisc.univ-evry.fr/), Université d'Évry Paris-Saclay.

**Live site:** https://huyentrang-le.github.io/

## What's on the site

- **Home**: short introduction, research interests, awards and scholarships, latest news and selected publications
- **About**: profile, education, PhD thesis and all awards
- **Research**: research topics and publications, with links to papers, slides, posters, demos and BibTeX
- **Projects**: grouped into hackathons & challenges, research prototypes, and events & community
- **Teaching**: networking courses, to be added
- **Learning Materials**: lab notes (by research project), course materials (by education level) and certificates
- **Contact**: email, profile links and campus maps

## Editing the content

| What | Where |
|------|-------|
| Name, links, menu | `_config.yml` |
| Publications and their links (pdf, code, slides, poster, demo, event) | `assets/ref.bib` |
| Education and PhD thesis | `_data/pi.yml` |
| Research topics | `_data/research_topics.yml` |
| News, awards | `_data/news.yml`, `_data/awards.yml` |
| Projects and their categories | `_data/projects.yml`, `_data/project_categories.yml` |
| Teaching | `_data/teaching.yml` |
| Learning materials | `_data/learning.yml` |
| Campus locations on the map | `_data/locations.yml` |
| Page text | `_pages/*.md` |
| Photo | `images/` |

Preview locally with Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

Pushing to the `main` branch builds the site and deploys it with GitHub Actions.

## Credits

This site is built on the [academic-website-template](https://github.com/sbryngelson/academic-website-template) by [Spencer Bryngelson](https://github.com/sbryngelson), released under the [MIT License](LICENSE). Many thanks for the design and the Jekyll setup.

## Contact

- Email: lehuyentrang.workmail@gmail.com
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/huyentrang-le) 
