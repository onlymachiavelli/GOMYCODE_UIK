import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm"

@Entity()
class DLT extends BaseEntity {
  @PrimaryColumn()
  token: String

  @Column()
  addedat: Date
}

export default DLT
