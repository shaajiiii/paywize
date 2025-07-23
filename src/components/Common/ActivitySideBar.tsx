import { useState } from "react";

// HARDCODED components just for design
export function ProfileActivitySidebar() {
  const [message, setMessage] = useState("");

  const activityData = [
    {
      id: 1,
      type: "comment",
      user: {
        name: "Floyd Miles",
        avatar:
          "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/64.jpg",

        isOnline: true,
      },
      time: "10:15 AM",
      action: "Commented on Stark Project",
      message:
        "Hi! Next week we'll start a new project. I'll tell you all the details later",
      hasThumbsUp: true,
    },
    {
      id: 2,
      type: "file",
      user: {
        name: "Guy Hawkins",
        avatar:
          "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/64.jpg",

        isOnline: true,
      },
      time: "10:15 AM",
      action: "Added a file to 7Heros Project",
      file: {
        name: "Homepage.fig",
        size: "13.4 Mb",
        type: "figma",
      },
    },
    {
      id: 3,
      type: "comment",
      user: {
        name: "Kristin Watson",
        avatar:
          "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/64.jpg",

        isOnline: false,
      },
      time: "10:15 AM",
      action: "Commented on 7Heros Project",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Profile Card */}
      <div className="bg-gray-50 rounded-2xl p-6 m-4 mb-6">
        <div className="text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-4">
            <img
              src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/64.jpg"
              alt="Megan Norton"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 border-2 border-white rounded-full"></div>
          </div>

          {/* Name and Username */}
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Megan Norton
          </h3>
          <p className="text-gray-500 text-sm mb-6">@megnorton</p>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6">
            <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </button>

            <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" />
              </svg>
            </button>

            <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 overflow-hidden flex flex-col">
        {/* Activity Header */}
        <div className="flex items-center mb-4">
          <div className="flex-1 border-t border-gray-200"></div>
          <h4 className="text-sm font-semibold text-gray-900 px-4">Activity</h4>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Middle Space */}
        <div className="flex-[11] bg-white overflow-auto rounded-md mt-4 p-0">
          {/* Middle content goes here */}
          <div className="min-h-0 overflow-y-auto space-y-3">
            {activityData.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <img
                    src={activity.user.avatar}
                    alt={activity.user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  {activity.user.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.user.name}
                    </p>
                    <span className="text-xs text-gray-500">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    {activity.action}
                  </p>

                  {/* Message */}
                  {activity.message && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-2 relative">
                      <p className="text-sm text-gray-700">
                        {activity.message}
                      </p>
                      {activity.hasThumbsUp && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-xs">👍</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* File */}
                  {activity.file && (
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          F
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {activity.file.size}
                        </p>
                      </div>
                      <button className="p-1">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex-[2] p-0 mt-8 ">
          <div className="flex items-center space-x-3 bg-gray-50 rounded-full p-2 py-2">
            <button className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message"
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400"
            />

            <button className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zM14 9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
