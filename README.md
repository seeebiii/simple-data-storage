# simple-data-storage
A node.js server receiving data via REST. This is a simple server for testing purposes, i.e. data is just stored in-memory.

## How-to
1. Checkout the project using: ```git clone git@github.com:seeebiii/simple-data-storage.git```
2. Start the server: ```node index.js```
3. Add some JSON data to the endpoint: 
```
{ 
   'value' : 123 
}
 
POST http://localhost:5000/data
```

## Api
**GET /data**

Returns an array of the last 10 entries (or all entries if there are < 10 entries).

**POST /data**

Add some data to the storage by sending a json object containing a ```value``` field. In case of success it returns HTTP status code 200 and the location of the added data in the ```location``` header of the response. The location URL might look like ```http://localhost:8000/data/1```.

**DELETE /data/:id**

Removes the data at the specified position. Returns HTTP status code 200 if the value has been removed.

## License
MIT License

Copyright (c) 2016 Sebastian Hesse

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
