import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class UserGL{


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeJogo: string;

    @Column()
    dataCompra: string;

    @Column({
        default: false
    })
    entregue: boolean;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

}


