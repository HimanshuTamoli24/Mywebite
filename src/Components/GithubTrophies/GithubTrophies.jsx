import React from 'react';

const GithubTrophies = () => {
  return (
    <div className="text-start my-5 p-3.5 ">
      <h6 className={`text-3xl italic my-4  text-white`}>Github Trophies</h6>
      <img
        src="https://github-profile-trophy.vercel.app/?username=himanshutamoli24&theme=gruvbox&margin-w=15&row=4&column=4"
        alt="GitHub Trophies"
        className="mx-auto m-1.5"
      />
    </div>
  );
};

export default GithubTrophies;
