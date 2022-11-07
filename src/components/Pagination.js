import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Pagination({page, totalPages}) {
    // const location = useLocation();

    // const usp = new URLSearchParams(location.search);
    // console.log(usp.get('page'));

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="/#">
            Previous
          </a>
        </li>
        {/* {
            Array(11).fill(1).map((el, i)=>{
                const classNames = ['page-item']
                前後總共11頁，-2 -1 0不算，剩下8頁
                const p = page - 5 + i;
                if(p<1 || p>totalPages) return null;
                if(p===page) classNames.push('active');

                return <li className={classNames.join(' ')} key={i}>
                    <a className="page-link" href="/#">
                        {page - 5 + i}
                    </a>
                </li>
            })
        } */}

        {
            Array(11).fill(1).map((el, i)=>{
                const classNames = ['page-item']
                const p = page - 5 + i;
                if(p<1 || p>totalPages) return null;
                if(p===page) classNames.push('active');
                const link = `?page=${p}`;

                {/* key改成p才能抓到該頁數 */}
                return <li className={classNames.join(' ')} key={p}>
                    <Link className="page-link" to={link}>
                        {p}
                    </Link>
                </li>
            })
        }

        <li className="page-item">
          <a className="page-link" href="/#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}