let satelliteRepo = {
    get: function () {
      return [
        {
          id: 1,
          type: "Communication",
          description:
            " Used for telecommunication and broadcasting, these satellites relay and amplify radio signals from Earth and retransmit them back to Earth",
        imageUrl : "../images/communication.jpg"
          },
        {
          id: 2,
          type: "Earth Observation",
          description:
            "Also known as Earth remote sensing satellites, these satellites are used for environmental monitoring, meteorology, mapping, and other applications",
          imageUrl: "images/earthObservation.jpg"
          },
        {
          id: 3,
          type: "Astronomical",
          description: "Used to monitor and image space",
          imageUrl : "images/astronomical.jpg"
        },
      ];
    },
  
    
  };
  module.exports = satelliteRepo;
  