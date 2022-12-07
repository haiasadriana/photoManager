# photomanager

1. Clone the repository on your local machine.
2. Navigate to the destination folder.
3. Run `npm i`.
4. Run `npm start`.
   You should see in terminal `Running server at 3000. Database Connected`
5. Open Postman. 

`GET` on `localhost:3000/api` -> you will be displayed all the entries present in the DB right now.


`POST` on `localhost:3000/api/upload` -> in form-data you will add `key: name - value:<enter_name>` and `key: photo (type file) - value:<uploaded_photo>`. The response you will get will be `Successfully uploaded`. 

In the uploads folder on your computer you should see the photo. After performing a `GET` again, you should see the photo in the response as well.
