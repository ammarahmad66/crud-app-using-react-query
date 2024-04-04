import { useNavigate, useParams } from "react-router-dom"
import PostForm from "../components/PostForm"
import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchPostsById, updatePost } from "../api/posts"

const EditPost = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const {isLoading, isError, data: post, error} = useQuery({
      queryKey: ["posts", id],
      queryFn: () => fetchPostsById(id)
  }) 

  const handleSubmit = (updatedPost) => {
    console.log(updatedPost)
    updatedPostMutation.mutate({
      id,
      ...updatedPost
    })
  }

  const updatedPostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      navigate('/')
    }
  })

  if (isLoading) return 'loading ...'
  if (isError) return `Error ${error.message}`
  return (
    <div>
        <PostForm onSubmit={handleSubmit} postData={post}/>
    </div>
  )
}

export default EditPost