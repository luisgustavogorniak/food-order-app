import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Hamburguer de verdade, Entregue no conforto de sua casa!</h2>
      <p>
        Escolha seu hamburguer favorito disponíveis do nosso cardápio e
        aproveite a hora do lanche.
      </p>
      <p>
        Nossos hamburguers são feitos pelos melhores hamburgueiros da região, com ingredientes frescos e um blend
        especial de carne bovina.
      </p>
    </section>
  );
};

export default MealsSummary;
