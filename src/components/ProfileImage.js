function ProfileImage(props) {
    return (
        <div className="ProfileName" >
            <img src={props.image} className="profile" alt="profile" />
        </div>

    )
}

export default ProfileImage