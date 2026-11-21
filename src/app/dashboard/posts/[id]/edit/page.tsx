import EditPostContent from '@/features/post/pages/EditPostContent';

// TODO: cambiar este nombre
type NewPostIdPage = {
  params: {
    id: string;
  };
};

const NewPostPage = async ({ params }: NewPostIdPage) => {
  const { id } = await params;

  return <EditPostContent postId={id} />;
};

export default NewPostPage;
