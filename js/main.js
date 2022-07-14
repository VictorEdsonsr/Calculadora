const criaCalculadora = () => {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    limpaDisplay() {
      this.display.value = "";
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta invalida");
          return;
        }
        this.display.value = conta;
      } catch (e) {
        alert("Conta invalida");
      }
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const elemento = e.target;

        if (elemento.classList.contains("btn-num")) {
          this.btnParaDisplay(elemento.innerText);
        }

        if (elemento.classList.contains("btn-clear")) {
          this.limpaDisplay();
        }

        if (elemento.classList.contains("btn-delete")) {
          this.apagaUm();
        }

        if (elemento.classList.contains("btn-equal")) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
};

const calculadora = criaCalculadora();

calculadora.inicia();
