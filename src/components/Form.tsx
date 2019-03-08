import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addArtilce, ArticleAction, IAddArticle, IAddArticlePayload } from '../actions';

function mapDispatchToProps(dispatch: Dispatch<ArticleAction>) {
  return {
    addArticle: (article: IAddArticlePayload) => dispatch(addArtilce(article))
  };
}

interface IForm {
  title: string;
  id: number;
}

interface IFormProps {
  addArticle: (artilce: IAddArticlePayload) => IAddArticle;
}

class ConnectedForm extends React.Component<IFormProps, IForm> {
  constructor(props: IFormProps) {
    super(props);
    this.state = { title: '', id: 0 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ title: event.currentTarget.value });
  }

  public handleSubmit(event: React.FormEvent<EventTarget>) {
    event.preventDefault();
    const { title, id } = this.state;

    this.props.addArticle({ title, id: id + 1 });
    this.setState({ title: '', id: id + 1 });
  }

  public render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="input"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-succes btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
