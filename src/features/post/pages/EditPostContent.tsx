'use client';

import { PostSummary, TextEditor } from '../components';
import { BackToListButton } from '../components/BackToListButton';
import { PostTitle } from '../components/PostTitle';
import { PostEditorContext } from '../context/PostEditorContext';
import { useCreatePostEditor } from '../hooks/useCreatePostEditor';

type EditPostContentProps = {
  postId: string;
};

const EditPostContent = ({ postId }: EditPostContentProps) => {
  const { editor, insertImage, isUploadingImage } = useCreatePostEditor(postId);

  if (!editor) return <p>Cargando editor...</p>;

  return (
    <PostEditorContext.Provider value={{ insertImage, isUploadingImage }}>
      <div className="flex h-full flex-col">
        <BackToListButton />

        <div className="flex h-full min-h-0 gap-4">
          <div className="relative flex flex-1 flex-col">
            {/* image loader */}
            {isUploadingImage && (
              <div
                className="absolute top-1/2 left-1/2 flex h-[80px] w-[80px]
                  -translate-1/2 items-center justify-center rounded-md border
                  border-gray-300 bg-white shadow"
              >
                <span className="loader"></span>
              </div>
            )}

            <PostTitle postId={postId} />

            {/* editor de texto */}
            <div className="min-h-0 flex-1">
              <TextEditor editor={editor} />
            </div>
          </div>

          <div>
            <PostSummary editor={editor} postId={postId} />
          </div>
        </div>
      </div>
    </PostEditorContext.Provider>
  );
};

export default EditPostContent;
