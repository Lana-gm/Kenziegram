import * as S from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { FiMoreHorizontal, FiArrowLeft } from "react-icons/fi";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { db } from "../../firebaseApi";
import { useParams } from "react-router-dom";

const ModalGallery = ({ isShowModal, setIsShowModal, post }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [posts, setPosts] = useState(0);

  const { loggedUser } = useAuth();

  useEffect(() => {
    let unsub = db
      .collection("Users")
      .doc(loggedUser.uid)
      .get()
      .then((doc) => {
        setPosts(parseInt(doc.data().posts));
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    return unsub;
  }, [loggedUser]);

  const handleClickOptions = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    setAnchorEl(null);

    db.collection('Posts')
      .doc('001')
      .collection(loggedUser.uid)
      .doc(post.key)
      .get().then((doc) => {
        db.collection('Feed').doc(doc.id).delete();
      })

    db.collection("Posts")
      .doc("001")
      .collection(`${loggedUser.uid}`)
      .doc(post.key)
      .delete()
      .then(() => {
        console.log("Documento excluido com sucesso");
        setIsShowModal(!isShowModal);
      })
      .catch((error) => {
        console.log("não");
        console.error("não foi possível excluir um documento", error);
      });

    db.collection("Users")
      .doc(loggedUser.uid)
      .update({
        posts: posts - 1,
      });
  };

  const handleClickReturn = () => {
    setIsShowModal(!isShowModal);
  };

  const { id } = useParams();
  //console.log(id);
  return (
    <S.Display>
      <div className="container">
        <button className="container__btn" onClick={handleClickReturn}>
          <FiArrowLeft className="container__btn__return btn" />

          <AiOutlineClose className="container__btn__close btn" />
        </button>
        <div className="content">
          <div className="content__box">
            {!!id === false && (
              <>
                <FiMoreHorizontal
                  className="box__btn-options btn"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClickOptions}
                />
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleDelete}
                >
                  <MenuItem onClick={handleDelete}>Excluir</MenuItem>
                </Menu>
              </>
            )}

            <figure className="box__figure">
              <img
                className="box__figure__img"
                src={post.img_url}
                alt={post.description}
              />
              <figcaption className="box__figure__figcaption">
                {post.description}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </S.Display>
  );
};

export default ModalGallery;
