
import CardList from '@/components/cardList/CardList'
import CategoryList from '@/components/categoryList/CategoryList'
import Featured from '@/components/featured/Featured'
import Menu from '@/components/menu/Menu'
const Home = ({searchParams}) => {
  
  const page = parseInt(searchParams.page) || 1
  
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className='flex gap-14'>
        <CardList page={page} cat={''}/>
        <Menu />
      </div>
    </div>
  );
}
export const runtime = "edge"

export default Home;
