// Include the NativeUI and Textures modules 

const NativeUI = require('NativeUI'); 
const Scene = require('Scene'); 
const Textures = require('Textures');


// Access the opject using the get method 

const plane = Scene.root.find('plane0'); 

// Create a reference to the picker 

const picker = NativeUI.picker; 

// Set up the configuration for the picker 

 const index = 0;

 const configuration = { 

 selectedIndex: index,

 items: [ 
 {image_texture: Textures.get('texture0')}, 
 {image_texture: Textures.get('texture1')}, 
 {image_texture: Textures.get('texture2')},
 {image_texture: Textures.get('texture3')},
 {image_texture: Textures.get('texture4')}
 ]

};

// Configure the picker 

picker.configure(configuration);

// Set the picker's visibility to true 
// This property is false by default

picker.visible = true;


//Subscribing to the selectedIndex property of the picker 

picker.selectedIndex.monitor().subscribe(function(index) { 
       plane.material.diffuse = configuration.items[index.newValue].image_texture;
 }); 