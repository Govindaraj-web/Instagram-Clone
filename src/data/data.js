
  export  const posts = [
      {
        id: 1,
        user: {
          id: 101,
          username: "john_doe",
          profile_pic: "src/assets/inst1.jpg"
        },
        image: "src/assets/post1.jpg",
        caption: "Beautiful sunset 🌅 #Nature",
        likes: 120,
        comments: [
          {
            user: "alice_wonder",
            comment: "Wow! Amazing shot! 📸"
          },
          {
            user: "mark_92",
            comment: "Where is this place?"
          }
        ],
        timestamp: "2025-02-11T14:30:00Z"
      },
      {
        id: 2,
        user: {
          id: 102,
          username: "travel_guru",
          profile_pic: "src/assets/ins1.jpg"
        },
        image: "src/assets/post2.jpg",
        caption: "Early morning hike to the top 🌄 #MountainLove",
        likes: 245,
        comments: [
          {
            user: "hiker_chick",
            comment: "Wow this looks peaceful!"
          },
          {
            user: "john_doe",
            comment: "Bro, you always find the best spots 🔥"
          }
        ],
        timestamp: "2025-03-15T06:20:00Z"
      },
      {
        id: 3,
        user: {
          id: 103,
          username: "foodie_queen",
          profile_pic: "src/assets/inst2.jpg"
        },
        image: "src/assets/post3.jpg",
        caption: "Feast mode on! 😋🍛 #SouthIndianDelight",
        likes: 372,
        comments: [
          {
            user: "chef_bala",
            comment: "Thali looks divine 🔥"
          },
          {
            user: "travel_guru",
            comment: "Where did you have this? 😍"
          }
        ],
        timestamp: "2025-04-01T12:45:00Z"
      }
    ];

 export const  profile = [{
      id: 101,
      username: "arjungovind_s",
      comment: "Gj",
      profile_pic: "src/assets/ag.jpg"
    } ];



  export  const suggestions = [
      {
        id: 101,
        username: "Silai_Sri",
        comment: "Suggested for you",
        profile_pic: "src/assets/su1.jpg"
      },
      {
        id: 102,
        username: "raju7067",
        comment: "Followed by ga3gjshri",
        profile_pic: "src/assets/su2.jpg"
      },
      {
        id: 103,
        username: "Madhu Lingam",
        comment: "Followed by thiru_7974 ",
        profile_pic: "src/assets/su3.jpg"
      },
      {
        id: 104,
        username: "Ananya🦋",
        comment: "Followed by _bhuvan_offcxl",
        profile_pic: "src/assets/su4.jpg"
      },
      {
        id: 105,
        username: "Shivani❤️",
        comment: "Followed by karan599kumar",
        profile_pic: "src/assets/su5.jpg"
      }
    ];

  export  const stories = [
      {
        id: 1,
        user: {
          id: 101,
          username: "its_me_rocky2498",
          profile_pic: "src/assets/pr1.jpg"
        },
        image: "/src/assets/story11.jpg"
       
      },
      {
        id: 2,
        user: {
          id: 102,
          username: "mr.dasante",
          profile_pic: "src/assets/pr2.jpg"
        },
        image: "/src/assets/story12.jpg"
        
      },
      {
        id: 3,
        user: {
          id: 103,
          username: "jeeva_prathi67",
          profile_pic: "src/assets/pr3.jpg"
        },
        image: "/src/assets/story13.jpg"
        
      }
    ]
  
  
      // export default {posts,profile,suggestions,stories};