import React from 'react';
import JoecodeLogo from '../assets/joecode.JPG';
import JoecodePhoto from '../assets/IMG-20231227-WA0081.jpg';
import image1 from '../assets/IMG_20241013_103959.jpg';
import image2 from '../assets/IMG_20241013_104020.jpg';
import image3 from '../assets/IMG_20241013_104032.jpg';
import image4 from '../assets/IMG-20231227-WA0081.jpg';
import image5 from '../assets/IMG_20241013_104230.jpg';
import BottomTabs from '../components/BottomTabs'
function Profile() {
  return (
    <>
      <div className="profile-container w-full flex flex-col items-center mb-12">

        {/* Cover Photo */}
        <div className="cover-photo w-full h-60 relative">
          <img
            src={JoecodeLogo}
            alt="Cover"
            className="w-full h-full object-cover"
          />

          {/* Profile Picture */}
          <div className="profile-picture absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
            <img
              src={JoecodePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="profile-info mt-14 text-center">
          <h2 className="text-3xl font-bold text-gray-800">JoeCode 👑</h2>
          <p className="text-gray-600">Web Developer | Tech Enthusiast</p>
        </div>

        {/* Profile Navigation */}
        <div className="profile-navigation mt-4 border-t border-gray-300 w-full">
          <ul className="flex justify-center gap-8 mt-4">
            <li className="cursor-pointer text-gray-700 hover:text-blue-600">Posts</li>
            <li className="cursor-pointer text-gray-700 hover:text-blue-600">About</li>
            <li className="cursor-pointer text-gray-700 hover:text-blue-600">Friends</li>
            <li className="cursor-pointer text-gray-700 hover:text-blue-600">Photos</li>
            <li className="cursor-pointer text-gray-700 hover:text-blue-600">More</li>
          </ul>
        </div>

        {/* Content Section */}
        <div className="profile-content mt-8 w-[90%]">
          {/* About Section */}
          <div className="about-section p-4 border rounded-lg bg-white shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">About</h3>
            <p className="text-gray-700">
              Hi! I'm JoeCode 👑, a passionate web developer specializing in frontend technologies and Backend technologies like React and Tailwind CSS, Php, python and mysql. I love creating clean, responsive, and interactive websites.
            </p>
          </div>

          {/* Recent Posts */}
          <div className="recent-posts p-4 border rounded-lg bg-white shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Recent Posts</h3>
            <div className="post p-4 border rounded-lg bg-gray-50 mb-4">
              <p className="text-gray-700">This is my first post on this platform!</p>
            </div>
            <div className="post p-4 border rounded-lg bg-gray-50 mb-4">
              <p className="text-gray-700">Loving the new features of React 18.</p>
            </div>
          </div>

          {/* Friends List */}
          <div className="friends-section p-4 border rounded-lg bg-white shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Friends</h3>
            <div className="flex gap-4 overflow-x-auto w-full py-4 scrollbar-hide">
              {[
                { name: "Honour", img: image3 },
                { name: "Dev Elijah", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTPjHOG0LBJKLlx35kYcK4hpx5xRdGNQ4tQ&s" },
                { name: "Mark", img: image5 },
                { name: "Adeoluwa", img: image1 },
                { name: "TimX", img: image2 },
                { name: "Sarah", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNN58XFDLxdqtwwWRSE924NjtuSryXFGxjg&s" }
              ].map((friend, index) => (
                <div key={index} className="flex-shrink-0 w-24">
                  <div className="friend flex flex-col items-center hover:scale-105 transition-transform">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={friend.img}
                        alt={friend.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-gray-700">{friend.name}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <BottomTabs />
    </>
  );
}

export default Profile;
