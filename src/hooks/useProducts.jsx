import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //     fetch(`https://bistro-boss-server-code-with-omars-projects.vercel.app/menu`)
  //         .then(res => res.json())
  //         .then(data => {
  //             setMenu(data)
  //             setLoading(false)
  //         })
  // }, [])
  // return [menu, loading]
  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`);
      return res.data;
    },
  });
  return [menu, loading, refetch];
};

export default useProducts;
