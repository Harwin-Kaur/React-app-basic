const Profile = ({nameProps, bio}) => {
    // const {nameProps, bio} = props;
// console.log(props);
    return (
<div>
    {/* <h1>{props.nameProps}</h1> */}
    <h1>{nameProps}</h1>
    <hr/>
    {/* <div>{props.bio}</div> */}
    <div>{bio}</div>
</div>
    );
};

export default Profile;

export const UserBio  =  () => {

    return "Lorem";

}