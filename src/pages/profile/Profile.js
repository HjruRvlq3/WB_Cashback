<<<<<<< HEAD
import React from "react";

import ProfileSeller from "./ProfileSeller";
import ProfileBuyer from "./ProfileBuyer";
import Header from "../../layout/header/Header";

import './Profile.css'

class Profile extends React.Component {
    renderContentByType() {
        const { type } = this.props;

        if (type === "seller") return <ProfileSeller />;
        if (type === "buyer") return <ProfileBuyer />;
        return <div>Неизвестный тип профиля</div>;
    }

    render() {
        return (
            <>
            <Header type="profile" />
            <main>
                <div className="profile-panel">
                    {this.renderContentByType()}
                </div>                
            </main>            
            </>
        );
    }
}

export default Profile;
=======
import React from "react";

import ProfileSeller from "./ProfileSeller";
import ProfileBuyer from "./ProfileBuyer";
import Header from "../../layout/header/Header";

import './Profile.css'

class Profile extends React.Component {
    renderContentByType() {
        const { type } = this.props;

        if (type === "seller") return <ProfileSeller />;
        if (type === "buyer") return <ProfileBuyer />;
        return <div>Неизвестный тип профиля</div>;
    }

    render() {
        return (
            <>
            <Header type="profile" />
            <main>
                <div className="profile-panel">
                    {this.renderContentByType()}
                </div>                
            </main>            
            </>
        );
    }
}

export default Profile;
>>>>>>> 529fbc0 (New commit)
