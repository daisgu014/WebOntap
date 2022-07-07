import html from '../core.js'
import Headers from '../component/Header.js'
import todoList from '../component/todolist.js'
import { connect } from '../store.js'
import Footer from './Footer.js'
function App({todos}){
    return html`
    <section class="todoapp">
    ${Headers()}
    ${todos.length > 0 && todoList()}
    ${todos.length > 0 && Footer()}
    </section>
    `
}
export default connect()(App)