import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Odenador from './Ordenador';
import { OpcoesOrdenador } from './Ordenador';
import Itens from './Itens';
import stylesTema from 'styles/Tema.module.scss';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');
  return(
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>
				Cardápio
      </h3>
      <Buscador busca={busca} setBusca={setBusca}/>
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro}/>
        <Odenador ordenador={ordenador} setOrdenador={setOrdenador}/>
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}
