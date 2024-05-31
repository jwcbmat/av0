import { Client, ConnectionError } from "https://deno.land/x/postgres@v0.19.3/mod.ts";

class _Database {
  private conn!: Client;

  public async connect() {
    try {
      this.conn = new Client({
        user: "postgres",
        database: "john",
        hostname: Deno.env.get("PGHOST"),
        password: Deno.env.get("PGPASSWORD"),
        port: 5432,
        connection: {
          attempts: 1
        },
        host_type: "tcp"
      });
      await this.conn.connect();

      console.log('Database connected successfully!');
    } catch (error) {
      if (error instanceof ConnectionError) {
        throw new Error(`Connection erro: ${error}`);
      }

      throw error;
    }
  }
}

export default _Database;
