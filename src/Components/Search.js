import react from 'react';

const Search=(props)=>{
    return (
        <div class="p-1 bg-light rounded rounded-pill shadow-sm input-control">
            <div class="input-group">
              <input type="search" placeholder={props.placeholder} aria-describedby="button-addon1" class="form-control border-0 bg-light"></input>
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
    );

}

export default Search;