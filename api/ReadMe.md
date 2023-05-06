- Create and Save()
  In terms of performance, create() may be more efficient if you are creating a new document and want to save it to the database in a single step. This is because create() sends a single insert query to the database to create the new document, whereas save() may require additional queries to update an existing document.

- findOne() and find()
  In terms of performance, the findOne() method can be more efficient than the find() method if you are only interested in retrieving a single document. This is because findOne() will stop searching for documents after it finds the first one that matches the specified criteria. In contrast, the find() method will continue searching for all documents that match the criteria, even if there is only one document that matches the criteria.

- findByIdAndUpdate() and findOneAndUpdate()
  The findByIdAndUpdate() and findOneAndUpdate() methods are used to update a document in a MongoDB database using Mongoose.

  return await User.findByIdAndUpdate(id, input, { new: true });
  The third argument is an options object that allows you to customize the behavior of the update operation. In this case, we are setting the new option to true, which means that the method will return the updated document instead of the old document. If you omit this option, the method will return the old document.

- findOneAndDelete(), findByIdAndDelete(), and findByIdAndRemove()

  - The findOneAndDelete(), findByIdAndDelete(), and findByIdAndRemove() methods are all used to delete a document from a MongoDB database using Mongoose.
  - The findOneAndDelete() method is used to find a single document that matches the specified criteria and delete it. This method returns the deleted document or null if no document is found. This method is useful when you need to delete a single document that matches a specific set of criteria.
  - The findByIdAndDelete() method is used to find a single document by its \_id field and delete it. This method returns the deleted document or null if no document is found. This method is useful when you need to delete a specific document by its \_id field.
  - The findByIdAndRemove() method is similar to findByIdAndDelete(), but it is deprecated in Mongoose version 5.9.7 and later, and findByIdAndDelete() is recommended instead.
  - In terms of performance, the choice between these methods depends on the specific requirements of your application and the data that you are working with. If you know the \_id of the document you want to delete, the findByIdAndDelete() method can be more efficient because it will use the \_id index to quickly find the document and delete it. This can result in faster delete times.

- sENDING DATA IN FORM DATA form
  For Axios older than v1.3.0 you must import form-data package.
  const FormData = require('form-data');
  const form = new FormData();
  form.append('my_field', 'my value');
  form.append('my_buffer', new Buffer(10));
  form.append('my_file', fs.createReadStream('/foo/bar.jpg'));
  axios.post('https://example.com', form)

  Starting from v0.27.0, Axios supports automatic object serialization to a FormData object if the request Content-Type header is set to multipart/form-data.
  The following request will submit the data in a FormData format (Browser & Node.js):

  import axios from 'axios';

  axios.post('https://httpbin.org/post', {
  user: {
  name: 'Dmitriy'
  },
  file: fs.createReadStream('/foo/bar.jpg')
  }, {
  headers: {
  'Content-Type': 'multipart/form-data'
  }
  }).then(({data})=> console.log(data));

- CHALLENGES
  what happens to users that didn't verify but hit the login link?
