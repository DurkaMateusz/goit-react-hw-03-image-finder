import React, { Component } from "react";
import styles from './SearchBar.module.css';

export class SearchBar extends Component {
    state = {
        query: '',
      };
    
      handleChange = e => {
        this.setState({ query: e.currentTarget.value });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
      };

    render() {
        
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        value={this.state.query}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }

}