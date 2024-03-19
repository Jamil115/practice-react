import React from 'react';

const ProfileInfo = () => {
    return (
        <div className="bg-gray-400 -mt-2 w-56 p-5 bg-white z-10 rounded-xl font-semibold">
            <h2>Your Name</h2>
            <p>See all Profiles</p>
            <div>
                <ul>
                    <li>Settings & Privacy</li>
                    <li>Help & Support</li>
                    <li>Display & Accessibility</li>
                    <li>Give Feedback</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;