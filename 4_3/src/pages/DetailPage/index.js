import React from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../../components/UserCard';

const DetailPage = () => {
    const { id } = useParams();

    return (
        <div>
            {
                id ? (
                    <div>
                        <h5>
                            Mostrando datos del user con id {id}
                        </h5>
                        <UserCard
                            name="Franco Mercado"
                            age={22}
                            dni={"12.456.789"}
                        />
                    </div>

                ) : (
                    <h5>
                        No se encontró al user
                    </h5>
                )
            }
        </div>
    );
}

export default DetailPage;