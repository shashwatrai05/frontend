import { Calendar, MapPin, PenBox, Verified } from 'lucide-react';
import moment from 'moment';
import React from 'react';

const UserProfileInfo = ({ user, posts, profileId, setShowEdit }) => {
    return (
        <div className='relative py-6 px-6 md:px-12 bg-white border-b border-gray-200'>
            <div className='flex flex-col md:flex-row gap-8'>

                {/* Profile Image */}
                <div className='relative'>
                    <div className='w-32 h-32 rounded-full border-4 border-white shadow-lg absolute -top-20 md:static md:border-4'>
                        <img
                            src={user.profile_picture}
                            alt=""
                            className='w-full h-full object-cover rounded-full'
                        />
                    </div>
                </div>

                {/* User Details */}
                <div className='w-full md:pl-6 pt-20 md:pt-0'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h1 className='text-2xl font-bold text-gray-900'>
                                    {user.full_name}
                                </h1>
                                <Verified className='w-5 h-5 text-blue-500 drop-shadow-sm' />
                            </div>
                            <p className='text-gray-600 text-sm'>
                                {user.username ? `@${user.username}` : 'Add a username'}
                            </p>
                        </div>

                        {/* Edit profile button */}
                        {!profileId && (
                            <button
                                onClick={() => setShowEdit(true)}
                                className='flex items-center gap-2 px-4 py-2 mt-3 md:mt-0
                                rounded-lg font-medium border border-gray-300 text-gray-700
                                hover:bg-gray-100 active:scale-95 transition cursor-pointer'
                            >
                                <PenBox className='w-4 h-4' />
                                Edit Profile
                            </button>
                        )}
                    </div>

                    {/* Bio */}
                    <p className='text-gray-700 text-sm mt-4 max-w-lg leading-relaxed'>
                        {user.bio || 'This user has not added a bio yet.'}
                    </p>

                    {/* Profile Meta */}
                    <div className='flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-gray-500 mt-4'>
                        <span className='flex items-center gap-2'>
                            <MapPin className='w-4 h-4 text-gray-600' />
                            {user.location || 'Add Location'}
                        </span>
                        <span className='flex items-center gap-2'>
                            <Calendar className='w-4 h-4 text-gray-600' />
                            Joined {moment(user.joined).fromNow()}
                        </span>
                    </div>

                    {/* Stats */}
                    <div className='flex items-center gap-10 mt-5'>
                        <div className='text-center'>
                            <p className='text-xl font-bold text-gray-900'>{posts.length || 0}</p>
                            <p className='text-xs uppercase tracking-wide text-gray-500'>Posts</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-xl font-bold text-gray-900'>{user.followers?.length || 0}</p>
                            <p className='text-xs uppercase tracking-wide text-gray-500'>Followers</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-xl font-bold text-gray-900'>{user.following?.length || 0}</p>
                            <p className='text-xs uppercase tracking-wide text-gray-500'>Following</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserProfileInfo;
