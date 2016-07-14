# Dash Website

## Jekyll
We are using Jekyll to generate the static html files.
https://jekyllrb.com

### Requirements (mac)
* Ruby: `brew install ruby`
* Ruby Gems: https://rubygems.org/pages/download
* NoddeJS: https://nodejs.org/en/
* Python: `brew install python`
* `gem install jekyll`

### Supporting Gems
These Gems were also installed on the CI server. 
* `gem install jekyll-paginate`
* `gem install classifier-reborn`
* `gem install jekyll-multiple-languages-plugin` https://github.com/Anthony-Gaudino/jekyll-multiple-languages-plugin

## Development
`jekyll serve` Will build to the _site directory whenever a file is changed and serve via 127.0.0.1

`jekyll build --watch` Will build to the _site directory whenever a file is changed. 

## Production Build
Production builds should be handled by CI.

## i18n
Language variables are set in `/_i18n/*.yml` files. 

### Strings
To output a variable to a template use:
`{% t key %}`
or
`{% translate key %}`

### Files
i18n files can be saved in their corresponding directories under `/_i18n/`

To include a file use:
`{% tf pagename/blockname.md %}`
or
`{% translate_file pagename/blockname.md %}`

## Writing a Blog Post
Blog posts can be written in MarkDown (*.md) or HTML (*.html).

Posts need to be saved in the `_posts` directory and the filename must always start with YYYY-MM-DD-

For example: `2016-05-12-new-website.md`

###Front matter
The top page of every post should contain the following (Example):
```
author: perry
layout: post
image: /assets/images/2016/05/Node40-banner.jpg
title: New website for Node40
description: Check out the new website for Node40
```
