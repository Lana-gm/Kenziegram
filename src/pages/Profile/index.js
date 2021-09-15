import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Post from "../../components/Post";
import * as s from "./style";
import Fade from "react-reveal/Fade";
import PictureFrame from "../../components/PictureFrame";
import Kelvin from '../../assets/kelvin.jpg'


const ProfilePage = () => {
  return (
    <s.Container>
      <Header />
      <Profile />
      <div className="picture__container">
        {/* <Fade> */}
          <PictureFrame source="https://dz2cdn1.dzone.com/storage/temp/12334613-971.jpg" alt="uau"/>
          <PictureFrame source="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/C_Hello_World_Program.png/402px-C_Hello_World_Program.png" alt="uau"/>
          <PictureFrame source="https://noticiasconcursos.com.br/wp-content/uploads/2021/07/20-Kenzie-Academy.png" alt="uau"/>
          <PictureFrame source="https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.6435-9/78950419_2587189914660614_714439437135642624_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=c9uc8u60OFIAX-pniSY&_nc_ht=scontent.fsdu2-2.fna&oh=f28ce30d63058d652e50a79fab056903&oe=61686F77" alt="uau"/>
          <PictureFrame source={Kelvin} alt="uau"/>
          <PictureFrame source="https://cdn.kenzie.academy/wp-content/uploads/prod/2020/07/31183555/Copy-of-DSC_0681-1820x1260.jpg" alt="uau"/>
          <PictureFrame source="https://media-exp1.licdn.com/dms/image/C4E03AQGKw2lrXe5efA/profile-displayphoto-shrink_800_800/0/1624205145920?e=1637193600&v=beta&t=3KOWb0F-yFx4QYhDaq8B77aBkF76ZAkjcuJqG2xd-Ek" alt="uau"/>
        {/* </Fade> */}
      </div>
    </s.Container>
  );
};

export default ProfilePage;
