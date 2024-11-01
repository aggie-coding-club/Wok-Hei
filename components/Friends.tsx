import React from "react";

// Friend interface for typing props
interface Friend {
  name: string;
  recipe: string;
  rating: string;
}

// Props interface for the FriendList component
interface FriendListProps {
  friends: Friend[];
}

const FriendList = ({ friends }: FriendListProps) => {
  return (
    <div className="p-4 float-right">
      <h1 className="text-xl font-bold mb-4 text-center">Friends</h1>
      <ul>
        {friends.map((friend, index) => (
          <li key={index} className="mb-4 p-4 border rounded-[10px] shadow-sm">
            <h3 className="text-lg font-semibold">{friend.name}</h3>
            <p>Most recent recipe: {friend.recipe}</p>
            <p>Recipe rating: {friend.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage of the FriendList component
const friendsData = [
  {
    name: "Alice",
    recipe: "Lasanga",
    rating: "Solid 8/10.",
  },
  {
    name: "Bob",
    recipe: "Double Chunk Chocolate Chip Cookies",
    rating: "Better than the ones from Costco!",
  },
  {
    name: "Charlie",
    recipe: "Pad Thai",
    rating: "It tasted just like how mom makes it.",
  },
];

const Friends = () => {
  return (
    <div className="p-6">
      <FriendList friends={friendsData} />
    </div>
  );
};

export default Friends;