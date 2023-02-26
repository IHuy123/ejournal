import { useEffect, useState } from "react";
import AppButton from "../../common/Button";
import { useAvatar } from "../../hooks/useAvatar";

export default function PostCommentForm({
  value = null,
  currentUser,
  onSubmit,
}) {
  const [loading, setLoading] = useState(false);
  const [commentText, setCommentText] = useState("");
  const id = currentUser.id;
  const avatar = currentUser.simple_local_avatar
    ? currentUser.simple_local_avatar.full
    : "";
  const avatarStr = useAvatar(id, avatar);
  console.log("🚀 ~ file: PostCommentForm.js:17 ~ avatarStr", avatarStr);

  useEffect(() => {
    if (value !== null) {
      setCommentText(value);
    }
  }, [value]);

  function onChange(evt) {
    evt.preventDefault();
    setCommentText(evt.target.value);
  }

  function funcCallBack(res) {
    setLoading(false);

    if (res.ok) {
      setCommentText("");
    }
  }

  function handleClickSubmit() {
    if (loading) {
      return;
    }

    if (onSubmit) {
      setLoading(true);
      onSubmit(commentText, funcCallBack);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <textarea
            name=""
            spellCheck="false"
            value={commentText}
            onChange={onChange}
            placeholder="Để lại bình luận của bạn..."
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <AppButton
            className="btn-blog"
            onClick={handleClickSubmit}
            isLoading={loading}
          >
            Bình luận
          </AppButton>
        </div>
      </div>
    </>
  );
}
