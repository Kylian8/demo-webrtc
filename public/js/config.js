turnConfig = {
  iceServers: [{
      urls: [ "stun:sp-turn1.xirsys.com" ]
   }, {
      username: "-B1LQpQO7DES5V71GDrHtsQAZG9YVKq2RSAtGlZXNhnED4Sy2GrttTLOIK__3IDKAAAAAGQeN5xCcmljZQ==",
      credential: "dbebe0cc-ca9e-11ed-a86e-0242ac120004",
      urls: [
          "turn:sp-turn1.xirsys.com:80?transport=udp",
          "turn:sp-turn1.xirsys.com:3478?transport=udp",
          "turn:sp-turn1.xirsys.com:80?transport=tcp",
          "turn:sp-turn1.xirsys.com:3478?transport=tcp",
          "turns:sp-turn1.xirsys.com:443?transport=tcp",
          "turns:sp-turn1.xirsys.com:5349?transport=tcp"
      ]
   }]
}
