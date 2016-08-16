document.getElementById('loading').style.display = 'block';

var data = [
    {id: 1, title: "A Tale of Two Cities by Charles Dickens", img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/A_Tale_of_Two_Cities_title_page.png", download: "https://www.gutenberg.org/ebooks/98"},
    {id: 2, title: "The Picture of Dorian Gray by Oscar Wilde", img: "https://t0.gstatic.com/images?q=tbn:ANd9GcQXN9QfDH6p3b9A1cMseCZvJYBGAMXxxEX4sg6GbZ6DNtm79Tuc", download: "https://www.gutenberg.org/ebooks/174"},
    {id: 3, title: "War and Peance by Leo Tolstoy", img: "http://livingout.social/wp-content/uploads/2016/07/51aIASVTHFL._SX307_BO1204203200_.jpg", download: "https://www.gutenberg.org/ebooks/2600"},
    {id: 4, title: "Moby Dick; Or, The Whale by Herman Melville", img: "http://www.mobydickcontent.com/wp-content/uploads/2015/03/moby_dick_book_cover_by_mario0357-d6rt002.jpg", download: "https://www.gutenberg.org/ebooks/2701"},
    {id: 5, title: "The Kama Sutra of Vatsyayana by Vatsyayana", img: "http://www.3livrossobre.com.br/wp-content/uploads/2012/12/84169_390.jpeg", download: "https://www.gutenberg.org/ebooks/27827"},
    {id: 6, title: "The Romance of Lust: A Classic Victorian erotic novel by Anonymous", img: "http://pictures.abebooks.com/isbn/9781484155974-uk.jpg", download: "https://www.gutenberg.org/ebooks/30254"},
    {id: 7, title: "The Adventures of Sherlock Holmes by Arthur Conan Doyle", img: "https://images.contentreserve.com/ImageType-100/1785-1/%7B24168643-5E3F-497D-A948-8BEC7B3D80CC%7DImg100.jpg", download: "https://www.gutenberg.org/ebooks/1661"},
    {id: 8, title: "Alice's Adventures in Wonderland by Lewis Carroll", img: "http://vignette1.wikia.nocookie.net/lostpedia/images/a/a8/Alice.jpg/revision/latest?cb=20070107151301", download: "https://www.gutenberg.org/ebooks/11"},
    {id: 9, title: "Pride and Prejudice by Jane Austen", img: "http://www.publicbookshelf.com/images/PridePrejudice423x630.jpg", download: "https://www.gutenberg.org/ebooks/1342"},
    {id: 10, title: "Dracula by Bram Stoker", img: "https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg", download: "https://www.gutenberg.org/ebooks/345"},
    {id: 11, title: "Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Frankenstein_1818_edition_title_page.jpg/250px-Frankenstein_1818_edition_title_page.jpg", download: "https://www.gutenberg.org/ebooks/84"},
    {id: 12, title: "Metamorphosis by Franz Kafka", img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Metamorphosis.jpg", download: "https://www.gutenberg.org/ebooks/5200"},
    {id: 13, title: "The Adventures of Tom Sawyer by Mark Twain", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Tom_Sawyer_1876_frontispiece.jpg/220px-Tom_Sawyer_1876_frontispiece.jpg", download: "https://www.gutenberg.org/ebooks/74"},
    {id: 14, title: "Emma by Jane Austen", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/EmmaTitlePage.jpg/220px-EmmaTitlePage.jpg", download: "https://www.gutenberg.org/ebooks/158"},
    {id: 15, title: "Sense and Sensibility by Jane Austen", img: "https://upload.wikimedia.org/wikipedia/commons/9/96/SenseAndSensibilityTitlePage.jpg", download: "https://www.gutenberg.org/ebooks/161"},
    {id: 16, title: "Great Expectations by Charles Dickens", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Greatexpectations_vol1.jpg/367px-Greatexpectations_vol1.jpg", download: "https://www.gutenberg.org/ebooks/1400"},
    {id: 17, title: "The Complete Works of William Shakespeare by William Shakespeare", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg", download: "https://www.gutenberg.org/ebooks/100"},
    {id: 18, title: "Les Misérables by Victor Hugo", img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Jean_Valjean.JPG", download: "https://www.gutenberg.org/ebooks/135"},
    {id: 19, title: "Peter Pan by J.M. Barrie", img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Peter_pan_1911_pipes.jpg", download: "https://www.gutenberg.org/ebooks/16"},
    {id: 20, title: "Treasure Island by Robert Louis Stevenson", img: "https://www.gutenberg.org/cache/epub/120/pg120.cover.medium.jpg", download: "https://www.gutenberg.org/ebooks/120"},
]

var EbookImage = React.createClass({
        render: function() {
                return (
                                <div className="card-image">
                                        <img width="448px" height="597px" src={ this.props.img } alt={ this.props.title } />
                                        <span className="card-title">{ this.props.title }</span>
                                </div>

            );
        }
});
var EbookContent = React.createClass({
        render: function() {
                return (
                        <div className="card-content">
                                <p></p>
                        </div>
            );
        }
});
var EbookAction = React.createClass({
        render: function() {
                return (
                        <div className="card-action">
                        <a className="btn waves-effect waves-light" href={ this.props.download }><i className="material-icons left">file_download</i> Download</a>
                        </div>
            );
        }
});
var EbookCard = React.createClass({
        render: function() {
                return ( 
                        <div className="col s12 m4 l3">
                                                <div key={this.props.book.id} className="card hoverable">
                                                        <EbookImage title={this.props.book.title} img={this.props.book.img} />
                                                        <EbookContent />
                                                        <EbookAction download={this.props.book.download} />
                                                </div>
                                        </div>
                );
        }
});

var EbooksRow = React.createClass({
        render: function() {
                return (
                        <div className="row">
                                <div className="col s12 m12 l12">
                                        {data.map(function(book) {
                                                return <EbookCard book={book} />
                                        })}
                                </div>
                        </div>
            );
        }
});

ReactDOM.render(
        <EbooksRow />,
        document.getElementById('content')
);

document.getElementById('loading').style.display = 'none';
