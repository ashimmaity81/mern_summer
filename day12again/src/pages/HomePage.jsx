import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CategoryList } from "../components/CategoriesList";

const HomePage = (obj) => {
    console.log("🟡 : obj:", obj);
    const { text, handleSearchText } = obj;

    return (
        <div>
            <Header text={text} handleSearchText={handleSearchText} />
            <main className="p-8">
                <div>
                    <CategoryList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { HomePage };