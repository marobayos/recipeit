import RecipePreview from './components/recipe/recipePreview.js';
import * as recipes from './data-loaders/recipes';
import {Row, Col} from "react-bootstrap";

function App() {
  return (
      <Row xs={2} md={6} lg={8} className="g-4">
          {recipes.getAll().map(recipe => <Col><RecipePreview recipe={recipe}/></Col>)}
          {recipes.getAll().map(recipe => <Col><RecipePreview recipe={recipe}/></Col>)}
          {recipes.getAll().map(recipe => <Col><RecipePreview recipe={recipe}/></Col>)}
          {recipes.getAll().map(recipe => <Col><RecipePreview recipe={recipe}/></Col>)}
          {recipes.getAll().map(recipe => <Col><RecipePreview recipe={recipe}/></Col>)}
          {recipes.getAll().map(recipe => <Col><RecipePreview recipe={recipe}/></Col>)}
          {recipes.getAll().map(recipe => <Col><RecipePreview recipe={recipe}/></Col>)}
      </Row>
  );
}

export default App;
