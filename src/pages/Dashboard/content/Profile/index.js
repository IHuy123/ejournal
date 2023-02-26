import ChangePassWord from "./changePassWord";
import UpdateProfile from "./updateProfile";
function Profile() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-form">
        <div className="row">
          <UpdateProfile/>
          <ChangePassWord />
        </div>
      </div>
    </div>
  );
}

export default Profile;
