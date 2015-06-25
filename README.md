# initials-avatar-generator
Avatar generator with initials.

## getting start
make sure you have install `imagemagick`

```
brew install imagemagick
```

then in your project

```
npm install initials-avatar-generator --save

```
the first arguments is config

```javascript
var image = require('initials-avatar-generator').image
var fs = require('fs')
var option = {
	width:100, //可选值 integer
	color:eb002a, //rgb
	font:kx //kx,lihei,bariol,din
}
//return a buffer
image(option,function(buffer){
	fs.writeFile('file.png',buffer)	
})
```
## LICENSE

The MIT License (MIT)

Copyright (c) 2015 Shadow Cun <[vinthony@gmail.com](vinthony@gmail.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

