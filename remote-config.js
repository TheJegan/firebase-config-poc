{
   "conditions": [{
    "name": "android_english",
    "expression": "device.os == 'android' && device.country in ['us', 'uk']",
    "tagColor": "BLUE"
  }, {
    "name": "tenPercent",
    "expression": "percent <= 10",
    "tagColor": "BROWN"
  }],
  "parameters":[
    {
      "key":"favorite_coffee",
      "value_options":[
        {
          "value":"Coffee Beans"
        }
      ]
    }
      {
      "key":"welcome_message",
      "value_options":[
        {
          "value":"hello web Again"
        }
      ]
    }
  ],
  "version":{
    "version_number": "42",
    "update_time":"2018-05-11T18:46:40Z",
    "update_user":{
      "name":"Jane Developer",
      "email":"jane@developer.org",
      "imageUrl":"http://image.google.com/path-to-profile-photo-for-jane"
    },
    "description":"Adding welcome messages. Horsing",
    "origin":"CONSOLE",
    "update_type":"INCREMENTAL_UPDATE"
  }
}
