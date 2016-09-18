require.config({
		waitSeconds : 2,
		paths : {
				text : 'vendor/text',
				json : 'vendor/json'
		}
});
require(['json!ebooks.json'], function(data){
        var EbookImage = React.createClass({
                render: function() {
                        return (
                                        <div className="card-image">
                                                <img width="448px" height="597px" src={ this.props.book.img } alt={ this.props.book.title } />
                                                <span className="card-title">{ this.props.book.title } by { this.props.book.author }</span>
                                        </div>

						);
                }
        });
        var EbookContent = React.createClass({
                render: function() {
                        return (
                                <div className="card-content">
                                        <p>
                                            <strong>Tags:</strong>
                                        </p>
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
                                <div className="col s12 m6 l4">
                                                        <div key={this.props.book.id} className="card hoverable">
                                                                <EbookImage book={this.props.book} />
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

        var SearchBox = React.createClass({
                doSearch: function() {
                    var query = this.refs.searchInput.getDOMNode().value;
                    this.props.doSearch(query);
                },
                render: function() {
                        return <input type="text" ref="searchInput" placeholder="Search books..." value={this.props.query} onChange={this.doSearch} />
                }
        });

        ReactDOM.render(
                <EbooksRow />,
                document.getElementById('content')
        );
});
