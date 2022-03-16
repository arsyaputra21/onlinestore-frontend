import Container from '../components/Container';
import Thumbnail from '../components/Thumbnail';
import LayoutNav from '../components/LayoutNav';

export default function Home(props) {
  const booksData = props.request;
  return (
    <LayoutNav user>
      <Container>
        {booksData.map((book) => (
          <Thumbnail
            key={book.productID}
            bookId={book.productID}
            imgUrl={book.image_product}
            title={book.nama}
            price={book.harga}
            dateAdded={book.tgl_input}
            available={book.jumlah}
          />
        ))}
      </Container>
    </LayoutNav>
  );
}

export async function getServerSideProps(context) {
  const request = await fetch('http://localhost:5000/books').then((res) =>
    res.json()
  );

  return { props: { request } };
}
