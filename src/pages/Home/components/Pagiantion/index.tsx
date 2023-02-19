import { ArrowLeft, ArrowRight } from "phosphor-react";
import * as P from "./styles";
//============================================================

interface PaginationProps {
  page: number;
  totalPages: number;
  leftClick: () => void;
  rightClick: () => void;
}

export function Pagination({
  page,
  totalPages,
  leftClick,
  rightClick,
}: PaginationProps) {
  return (
    <P.Container>
      <button onClick={leftClick}>
        <ArrowLeft weight="bold" />
      </button>
      <div>
        <p>
          {page} de {totalPages}
        </p>
      </div>
      <button onClick={rightClick}>
        <ArrowRight weight="bold" />
      </button>
    </P.Container>
  );
}
