// to store the url and public_id from the image object
let imageUrl;
let imageId;

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const animal_type = document.querySelector('#animal_type').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const description = document.querySelector('#description').value.trim();
    const age = document.querySelector('#age').value.trim();
    const gender = document.querySelector('#gender').value.trim();
    const size = document.querySelector('#size').value.trim();
    const good_with_kids = document.querySelector('#good_with_kids:checked') ? true : false;
    const good_with_dogs = document.querySelector('#good_with_dogs:checked') ? true : false;
    const good_with_cats = document.querySelector('#good_with_cats:checked') ? true : false;
    const zodiac = document.querySelector('#zodiac').value.trim();
    const special_needs = document.querySelector('#special_needs:checked') ? true : false;
    const adoptable_now = document.querySelector('#good_with_dogs:checked') ? true : false;
    const contact_email = document.querySelector('#contact_email').value.trim();
    console.log(name, gender, special_needs);

    if (name) {
      const response = await fetch(`/api/pets`, {
        method: 'POST',
        body: JSON.stringify({
          name, animal_type, breed, description, age, gender, size, good_with_kids, good_with_dogs, good_with_cats, zodiac, special_needs, adoptable_now, contact_email,
          imageId, imageUrl
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
        console.log(err);
      }
    };
};

// code related to images work in progress
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'petseekerpalooza', 
  uploadPreset: 'dmyaf3jw'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
      //store the image data
      const imageData = result.info;

      imageUrl = imageData.url;
      imageId = imageData.public_id;

      console.log('test=============')
      console.log(imageUrl);
      console.log(imageId);
      
    }
});

// link to the widget 
document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);

//cloudinary.url("help_dtbigg.png", {width: 90, height: 90, crop: "thumb"});
//http://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill,r_20/sample.png
  
document.querySelector('#new-pet-form').addEventListener('submit', newFormHandler);