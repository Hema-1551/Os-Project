
const Search = (props) => {

    return (
        <div className="p-1 bg-light rounded rounded-pill shadow-sm input-control">
            <div className="input-group">
              <input type="search" placeholder={props.placeholder} aria-describedby="button-addon1" className="form-control border-0 bg-light"></input>
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
    );

}

export default Search;