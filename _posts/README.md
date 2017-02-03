To create a new post, all you need to do is create a file in the _i18n/[language]/_posts directory. How you name files in this folder is important. Jekyll requires blog post files to be named according to the following format:

YEAR-MONTH-DAY-title.MARKUP
Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and MARKUP is the file extension representing the format used in the file. For example, the following are examples of valid post filenames:

2011-12-31-new-years-eve-is-awesome.md
2011-12-31-new-years-eve-is-awesome.html
2012-09-12-how-to-write-a-blog.textile

## Writing a Blog Post
Blog posts can be written in MarkDown (*.md) or HTML (*.html).

Posts need to be saved in the `_posts` directory and the filename must always start with YYYY-MM-DD-

For example: `2016-05-12-new-website.md`

###Front matter
The top page of every post should contain the following (Example):
```
author: perry
layout: post
image: Node40-banner.jpg
title: New website for Node40
description: Check out the new website for Node40
```

###Blog Post Images
Image paths for blogs are currently relative to /assets/img/blog by default. If we replaced the image path from the front matter above with:
```
	image: MyImage.jpg
```
... will look for `"MyImage.jpg"` in the `/assets/img/blog` folder. 

