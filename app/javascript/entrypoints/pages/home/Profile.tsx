import React from "react";
import ArtistProfile from "../../components/artists/Profile";

type Props = {
  user: any;
};

const Profile = ({user}: Props) => {
 
  return (
    <>
      <ArtistProfile  user={user} />
    </>
  );
};

export default Profile;
