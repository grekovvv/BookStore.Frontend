import { Button, Card } from "antd"
import { CardTitle } from "./Cardtitle"

interface Props {
    books: Book[],
    handleDelete: (id: string) => void;
    handleOpen: (book: Book) => void;
}

export const Books = ({books, handleOpen, handleDelete}: Props) => {
    return (
        <div className="cards">
            {books.map((book : Book) => (
                <Card 
                    key={book.id} 
                    title = { <CardTitle title={book.title} price={book.price}/> }
                    style={{backgroundColor: "#47b68fff"}}>
                    
                    <p>{book.description}</p>
                    <div className="card__buttons">
                        <Button
                            onClick={() => handleOpen(book)}
                            style={{ flex: 1 }}
                            >
                            Редактировать
                        </Button>
                        <Button
                            onClick={() => handleDelete(book.id)}
                            danger
                            style={{ flex: 1 }}
                            >
                            Удалить
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
};